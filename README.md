# Clean code

## Linters vs Prettier

Linters have two categories of rules:

**Formatting rules:** eg: max-len, no-mixed-spaces-and-tabs, keyword-spacing, comma-style…

Prettier alleviates the need for this whole category of rules! Prettier is going to reprint the entire program from
scratch in a consistent way, so it’s not possible for the programmer to make a mistake there anymore.

**Code-quality rules:** eg no-unused-vars, no-extra-bind, no-implicit-globals, prefer-promise-reject-errors…

Prettier does nothing to help with those kind of rules. They are also the most important ones provided by linters as
they are likely to catch real bugs with your code!

In other words, use Prettier for formatting and linters for catching bugs!

## ESLint

** PyCharm Setup **
> Docs: https://www.jetbrains.com/help/webstorm/eslint.html

Requirements: NodeJS

- install eslint with npm or yarn
- install eslint-plugin-react to lint react applications with npm or yarn
- Pycharm Preferences > Languages & Frameworks > JavaScript > Code Quality Tools > ESLint and select "Automatic ESLint
  configuration"

> Automatic configuration will use the ESLint package located in node_modules and the .eslintrc.* config

When everything is setup nicely, you might also want to select "Run eslint --fix on save"

** Next.js **

- the 2 packages are installed by default. (eslint-plugin-react is included in eslint-config-next)
- eslintrc.json config is created by default

> Config: https://eslint.org/docs/rules/

## Prettier

** PyCharm Setup **
> Docs: https://www.jetbrains.com/help/webstorm/prettier.html#ws_prettier_install

Requirements: NodeJS, PyCharm's Prettier plugin

- install prettier with npm or yarn
- Pycharm Preferences > Languages & Frameworks > JavaScript > Prettier and select prettier package

Also here it makes sense to "Run on save".

> Config: https://prettier.io/docs/en/options.html

## ESLint and Prettier coexisting

As ESLint and Prettier have a lot of code formatting rules in common, it is best to handle that. You can install
https://github.com/prettier/eslint-config-prettier and extend the eslint config with it. This will turn off all rules
that are unnecessary or might conflict with Prettier.

Rules regarding formatting should then all be set in .prettierrc.*

## Precommit

To investigate : https://prettier.io/docs/en/precommit.html
