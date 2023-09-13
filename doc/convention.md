# Weather Website Naming Conve 

## Style

### Color



<br>

### Screen display

- Mobile screen : `375px`
- Desktop screen : `1440px`

<br>
### Typography

- Font family : [`'Source Code Pro', Poppins`](https://fonts.google.com/specimen/Poppins)
- Font weight : `200, 400, bold`
- Font size : `24px, 16px, 13px`


## React code conventions

### Naming convention

#### Naming Convention

- `Components` : Use descriptive and meaningful names for React components. Use PascalCase(capitalizing the first letter of each word) for component names.

```javascript
/// React component
const TodoItem = () => {
    ...
}

/// Avoid
const todoItem = () => {
    ...
}
 
---------------

//Typescript interface
interface TodoItem {
    id: number;
    name: string;
    value: string;
}

// Avoid 
interface todoItem {
    id: number;
    name: string;
    value: string;
}

---------------

//Typescript type allias
type TodoList = TodoIten[];

//Avoid
type todoList = TodoItem[];
```
- `Files` : Name your files using PascalCase, matching the component name. For example, if you have a component named UserCard, the file should be named UserCard.js.

- `Props` : Use descriptive names for props to clearly indicate their purpose. Avoid abbreviations or acronyms unless they are widely understood in the context of your project.

For example:
- *instead of usr, use user.*

```javascript
import React from 'react';

interface User {
    name: string;
    email: string;
    localtion: string;
}

interface UserCardProps {
    user: User;
}

const UserCard = ({ user }) => {
    const { name, email, location } = user;

    return (
        <div className="user-card">
            <h2>{name}</h2>
            <p>Email: {email}</p>
        </div>
    );
};
export default UserCard;
```

In this example, the prop user is used to pass user data to the UserCard component. By using a descriptive name like user, it's clear that the prop represents user data, making the code more readable and understandable.

- `State variables` : Prefix state variables with **full form**  to denote boolean values.


```javascript
import React, { useState } from 'react';

//  Prefix state variables with **full form** 

const ExampleComponent = () => {
    const [active, setActive] = useState(false);
    const [error, setError] = useState(false);
    const [render, setRender] = useState(false);


// Avoid
const ExampleComponent = () => {
    const [act, setAct] = useState(false);
    const [err, setErr] = useState(false);
    const [rdr, setRdr] = useState(false);
}

const handleClick = () => {
    setActive(!Active);
};

return (
    <div>
        {Render && (
            <div className={Active ? 'active' : 'inactive'}>
                <button onClick={handleClick}>
                    {Active ? 'Active' : 'Inactive'}
                </button>
                {Error && <p>An error occurred.</p>}
            </div>
        )}
    </div>
    );
};
```
# Git / Github Convention

## Git Commit Messages

A good commit message should be:
- `Descriptive`: Explain what changes were made and why they were made.
- `Concise`: Keep the message short and to the point.
- `Capitalized`: Start the message with a capital letter.
- `End with a period`: Finish the message with a period.

## Branch Naming Convention

A simplified branch naming convention can be:
- `<category>`: The type of branch, such as feature, bugfix, hotfix, or test.
- `<reference>`: The reference of the issue/ticket you are working on, or no-ref if there is no reference.
- `<description>`: A short description of the branch's purpose, using kebab-case.
