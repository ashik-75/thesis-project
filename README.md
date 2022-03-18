
# Next Js Editor with Eslint , Prettier & Tailwind

Following the Airbnb style guide , setup our edit for react project


## Run Locally

settings.json

```bash
{
  "workbench.colorTheme": "Ayu Dark",
  "window.zoomLevel": 1,
  // "javascript.updateImportsOnFileMove.enabled": "always"

  "css.validate": false,
  "tailwindCSS.emmetCompletions": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true,
    "source.sortMembers": true
  },
  // Add those two lines:
  "editor.formatOnSave": true, // Tell VSCode to format files on save
  "editor.defaultFormatter": "esbenp.prettier-vscode" // Tell VSCode to use Prettier as default file formatter
}

```

.eslintrc.json in root directory

```bash
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["plugin:react/recommended", "airbnb", "prettier"],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "js": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": ["react"],
    "rules": {
        "react/react-in-jsx-scope": 0,
        "react/jsx-props-no-spreading": 0,
        "react/prop-types": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "no-unused-vars": [
            "error",
            { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }
        ],
        "arrow-body-style": 0
        // "react/jsx-curly-brace-presence": ["always"]
    }
}

```

.prettierrc.json

```bash
{
    "trailingComma": "es5",
    "singleQuote": true,
    "printWidth": 100,
    "tabWidth": 4,
    "semi": true,
    "endOfLine": "auto"
}


```

Install dev - dependencies (just add package.json then yarn install)

```bash
  
  "devDependencies": {
    "autoprefixer": "^10.4.2",
    "eslint": "^8.9.0",
    "eslint-config-airbnb": "^19.0.4",
    "eslint-config-next": "12.1.0",
    "eslint-config-prettier": "^8.4.0",
    "eslint-plugin-import": "^2.25.4",
    "eslint-plugin-jsx-a11y": "^6.5.1",
    "eslint-plugin-react": "^7.28.0",
    "eslint-plugin-react-hooks": "^4.3.0",
    "postcss": "^8.4.8",
    "prettier": "^2.5.1",
    "tailwindcss": "^3.0.23"
  }
```


