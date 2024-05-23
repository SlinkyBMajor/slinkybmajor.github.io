"use strict";(self.webpackChunkslinky_kit=self.webpackChunkslinky_kit||[]).push([[489],{7244:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var n=t(4848),o=t(8453);const s={},a="Reusable react hook forms input",c={id:"code/react-hook-forms/input",title:"Reusable react hook forms input",description:"",source:"@site/docs/code/react-hook-forms/input.md",sourceDirName:"code/react-hook-forms",slug:"/code/react-hook-forms/input",permalink:"/docs/code/react-hook-forms/input",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/code/react-hook-forms/input.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tutorial Intro",permalink:"/docs/intro"}},u={},i=[];function m(e){const r={code:"code",h1:"h1",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"reusable-react-hook-forms-input",children:"Reusable react hook forms input"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-jsx",children:'import React from "react";\nimport { UseFormRegisterReturn, useFormContext } from "react-hook-form";\nimport { get } from "lodash";\nimport { InputErrorStyle } from "./types";\nimport { classNames } from "@/lib/styling";\n\ninterface RHFInputProps\n  extends UseFormRegisterReturn<string>,\n    Omit<\n      React.InputHTMLAttributes<HTMLInputElement>,\n      "name" | "onBlur" | "onChange"\n    > {\n  errorStyle?: InputErrorStyle;\n  className?: string;\n}\n\nfunction RHFInput(\n  { className, errorStyle = "border", name, ...rest }: RHFInputProps,\n  ref: React.Ref<HTMLInputElement>\n) {\n  const {\n    formState: { errors },\n  } = useFormContext();\n\n  return (\n    <input\n      className={classNames(\n        "border border-transparent",\n        className,\n        "type" in get(errors, name, {}) &&\n          (errorStyle === "border"\n            ? "border border-red-500 dark:border-red-400"\n            : "placeholder:text-red-500 dark:placeholder:text-red-400")\n      )}\n      name={name}\n      {...rest}\n      ref={ref}\n    />\n  );\n}\n\nexport default React.forwardRef<HTMLInputElement, RHFInputProps>(RHFInput);\n\n'})})]})}function p(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>c});var n=t(6540);const o={},s=n.createContext(o);function a(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);