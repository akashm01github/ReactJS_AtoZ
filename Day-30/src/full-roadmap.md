# Day 8 — RHF_Validation and Project [ project -1 ( Part-1)  ]

---

## 0. One-Line Summary

> `App.jsx` is the **brain** (holds state) → it passes **data down** as props and **callbacks down** for children to report back up. `Form` collects + validates data, `Navbar` switches views, `Usercard` displays data.

```
                    ┌──────────────────────────────┐
                    │            App.jsx           │
                    │  toggle  ▢   users ▢         │   ← single source of truth
                    └──────────────┬───────────────┘
             setToggle │           │            │ users + setToggle
                       ▼           ▼            ▼
                 ┌──────────┐ ┌──────────┐ ┌───────────┐
                 │ Navbar   │ │  Form    │ │ Usercard  │ (one per user)
                 └──────────┘ └──────────┘ └───────────┘
                  flips view   adds user    shows card
```

**Golden rule used here: "state lives in the closest common parent"** (state lifting).

---

## 1. `App.jsx` — State Owner + View Switcher

```jsx
const [toggle, setToggle] = useState(false);   // which view is visible
const [users,  setUsers]  = useState([]);      // list of created users
```

| State | Type | Initial | Meaning |
|---|---|---|---|
| `toggle` | boolean | `false` | `false` → show **Form**; `true` → show **User list** |
| `users` | array | `[]` | Every submitted user object |

### Render logic (ternary = mini router)

```jsx
<Navbar setToggle={setToggle} />      // always visible

{ toggle
    ? users.map(u => <Usercard user={u} setToggle={setToggle} />)   // list view
    : <Form setUsers={setUsers} setToggle={setToggle} />            // form view
}
```

**Why it works:** React re-runs `App` whenever `toggle` or `users` changes → the UI "switches" without any routing library.

### ⚠️ Two flaws here

1. `users.map(...)` **has no `key`** → React can't identify list items efficiently. Add `key={elem.email}`.
2. **Update button is fake.** `Usercard`'s Update only calls `setToggle` → it just shows the empty `Form` again. There is no `setUsers` inside `Usercard` and no "editing user id" state, so editing can't actually work yet.

---

## 2. `Navbar.jsx` — Dumb (Presentational) Component

```jsx
const Navbar = ({ setToggle }) => (
  <button onClick={() => setToggle(prev => !prev)}>Create user</button>
);
```

- Receives **only one prop**: the setter `setToggle`.
- Knows **nothing** about `users` or the form → fully reusable / "dumb".
- Uses the **functional updater** `prev => !prev` → safe with stale closures.
- Everything visual is Tailwind: `p-4 flex rounded items-center bg-black justify-between`.

> Naming note: the button says **"Create user"** but it also acts as "go back to list" when the form is open. A dynamic label would be clearer:
> `{toggle ? "Create user" : "View users"}`

---

## 3. `Form.jsx` — The Real Logic (React Hook Form)

### 3.1 Setup

```jsx
const { register, handleSubmit, reset, formState: { errors } } = useForm({
  mode: "onChange",
  defaultValues: { name: "Pandu", email: "pandu@gmail.com" },
});
```

| Piece | What it gives you |
|---|---|
| `register` | Spread onto an input → RHF tracks its value **without `useState`** |
| `handleSubmit` | Wraps your submit fn; runs validation first, calls fn **only if valid** |
| `reset` | Puts fields back to `defaultValues` |
| `formState.errors` | Object keyed by field name; each has `.message` |
| `mode:"onChange"` | Validate as the user types (default is only on submit) |

**Key idea:** RHF stores values in **refs**, not React state → typing doesn't re-render the whole component (only error-relevant renders happen). That's why it's faster than 4 × `useState`.

### 3.2 Field registration pattern (repeated 4×)

```jsx
<input
  {...register("name", {           // ① spread: name + onChange + onBlur + ref
      required: "Name is required",
      pattern: { value: /^\S.*$/, message: "Blank spaces is not allowed" },
  })}
  type="text" placeholder="Name"   // ② your own props after the spread
/>

{errors.name && <p className="text-red-500">{errors.name.message}</p>}  // ③ show error
```

⚠️ Order matters: `{...register(...)}` **first**, then `type`/`className` — otherwise your props can be overwritten by the spread.

### 3.3 Validation rules table

| Field | `required` | Extra rule | Intent |
|---|---|---|---|
| `name` | "Name is required" | `pattern /^\S.*$/` | Must not **start** with a space |
| `email` | "Email is required" | `pattern` email regex | Basic email shape check |
| `mobile` | "Mobile is required" | `minLength 10` + `maxLength 10` | Exactly 10 chars |
| `image` | "Image is required" | `type="url"` (browser check) | Must be a URL |

**`pattern` is truthy-when-invalid:** the regex must **match the valid case** — RHF reports an error if it *fails* to match.

### 3.4 Submit handler

```jsx
const formSubmit = (data) => {
  console.log(data);                      // { name, email, mobile, image }
  setUsers(prev => [...prev, data]);      // ① append immutably
  reset();                                // ② clear fields → back to defaults
  setToggle(prev => !prev);               // ③ jump to list view
};
```

- `data` comes **pre-validated** — `handleSubmit` never calls this on invalid input.
- `[...prev, data]` creates a **new array** → React detects the change (never `push`).
- The three actions are a package: **add → clear → navigate**.

---

## 4. `Usercard.jsx` — Display Only

```jsx
const Usercard = ({ user, setToggle }) => (
  <div>
    <img src={user.image} />        {/* user-provided URL */}
    <h1>{user.name}</h1>
    <p>{user.email}</p>
    <p>{user.contact}</p>           {/* ❌ field is actually `mobile` */}
    <button onClick={() => setToggle(p => !p)}>Update</button>
    <button>Delete</button>         {/* ❌ no onClick */}
  </div>
);
```

| Prop | Comes from | Used for |
|---|---|---|
| `user` | one element of `App`'s `users` array | filling the card |
| `setToggle` | `App` | (intended) edit mode |

**Bugs:**
1. `user.contact` → should be **`user.mobile`** (the form never creates a `contact` key) → mobile number renders as blank.
2. Delete button does nothing — you'd need `setUsers(prev => prev.filter(...))` passed down as `onDelete`.
3. Update can't pre-fill the form — no `editingUser` state exists in `App`.

---

## 5. Full App Flow (user journey)

```
  ┌──────────── START (App mounts) ────────────┐
  │  toggle = false , users = []               │
  └────────────────────┬───────────────────────┘
                       ▼
              ┌─────────────────┐
              │  FORM VIEW      │   (Form is centered, empty users)
              └────────┬────────┘
     user types in inputs│  ← mode:"onChange" validates on every keystroke
                       ▼
        ┌──────────────────────────────┐
        │ errors object updates        │─── error? ──► show <p class="text-red-500">
        │ (form stays invalid)         │
        └──────────────┬───────────────┘
                       │ click "Add user"
                       ▼
        ┌──────────────────────────────┐
        │ handleSubmit(formSubmit)     │
        │  all 4 fields valid ?        │
        └──────┬───────────────┬───────┘
            NO │               │ YES
               ▼               ▼
      nothing happens   formSubmit(data)
      (errors shown)          │
                              ├─► setUsers([...prev, data])   ← users grows
                              ├─► reset()                     ← fields cleared
                              └─► setToggle(true)             ← view flips
                                       │
                                       ▼
                        ┌──────────────────────────────┐
                        │  LIST VIEW                   │
                        │  users.map → <Usercard/>     │
                        └──────┬───────────────┬───────┘
                               │               │
                     Update ▼                  ▼ Delete
                 setToggle(false)          (no handler yet)
                 → empty form again         ✗ nothing happens
```

---

## 6. State Machine (`toggle`)

Only two states, strictly mirrored — this is why the app feels like two pages:

```
        ┌───────────────┐   Navbar click / Update / submit   ┌──────────────┐
        │  FORM VIEW    │ ─────────────────────────────────► │  LIST VIEW   │
        │ toggle=false  │ ◄───────────────────────────────── │ toggle=true  │
        └───────────────┘   Navbar click                    └──────────────┘
```

Any of the three buttons (`Navbar`, `Usercard` Update, form submit) can flip it — because they all share the *same* setter.

---

## 7. Prop / Data Flow Diagram (top-down data, bottom-up events)

```
                         ┌──────────────────────────────┐
                         │            App.jsx           │
                         │   toggle  ▢   users ▢        │
                         └───┬──────────┬──────────┬────┘
             props down      │          │          │
              ┌──────────────┘          │          └───────────────┐
              ▼                         ▼                          ▼
     ┌────────────────┐        ┌────────────────┐        ┌──────────────────┐
     │ Navbar.jsx     │        │ Form.jsx       │        │ Usercard.jsx     │
     │ in : setToggle │        │ in : setUsers  │        │ in : user        │
     │                │        │      setToggle │        │      setToggle   │
     └───────┬────────┘        └───────┬────────┘        └────────┬─────────┘
             │ events (callbacks) up   │                          │
             │  setToggle(!prev)       │ handleSubmit → data      │ setToggle(!prev)
             ▼                         ▼                          ▼
        "flip view"          "add user + clear + flip"     "flip view (should
                                                             be edit)"
```

**Rule visible here:** children **never** mutate `App`'s state directly — they call the setter they were handed.

---

## 8. Data Shape (transformation across the app)

```
HTML inputs (uncontrolled, DOM values)
        │  register() tracks refs
        ▼
RHF internal values: { name, email, mobile, image }
        │  handleSubmit → validate → formSubmit(data)
        ▼
App.users: [ { name, email, mobile, image }, ... ]   ← array of plain objects
        │  users.map(u => <Usercard user={u} />)
        ▼
Usercard props.user.name / .email / .mobile / .image
```

---

## 9. Why RHF Instead of Manual `useState`?

| | 4 × `useState` (manual) | `react-hook-form` |
|---|---|---|
| Value storage | React state → re-render per keystroke | refs → minimal re-renders |
| Validation code | hand-written ifs | declarative rules object |
| Error messages | separate state per field | `formState.errors.field.message` |
| Submit gating | manual check | `handleSubmit` handles it |
| Reset | set 4 states to "" | `reset()` |

---


