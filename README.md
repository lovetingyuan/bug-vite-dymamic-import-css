# bug-vite-dymamic-import-css

bug for vite reproduce

* run `yarn build`

* the dynamic import css module (`import('./style.css?inline')`) bundle becomes `var a="";export{a as default};`, which does not work as expected.
