"use strict";(self.webpackChunkslinky_kit=self.webpackChunkslinky_kit||[]).push([[529],{4852:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var t=o(4848),r=o(8453);const a={},i=void 0,s={id:"code/hooks/useConfirm",title:"useConfirm",description:"Confirmation hook",source:"@site/docs/code/hooks/useConfirm.md",sourceDirName:"code/hooks",slug:"/code/hooks/useConfirm",permalink:"/slinkit/docs/code/hooks/useConfirm",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/code/hooks/useConfirm.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Welcome",permalink:"/slinkit/docs/intro"},next:{title:"Reusable react hook forms input",permalink:"/slinkit/docs/code/react-hook-forms/input"}},l={},c=[];function m(n){const e={code:"code",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"Confirmation hook"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-jsx",children:'"use client";\nimport React, { MouseEventHandler, createContext, useState } from "react";\nimport { noop } from "lodash";\nimport { Dialog } from "@headlessui/react";\nimport Modal from "@/components/Modal";\n\ninterface ConfirmationContextProps {\n  confirm: (message: string) => Promise<boolean>;\n}\n\nexport const ConfirmationContext = createContext<ConfirmationContextProps>({\n  confirm: () => Promise.reject(false),\n});\n\nconst ConfirmationProvider: React.FC<{ children: React.ReactNode }> = ({\n  children,\n}) => {\n  const [activeConfirm, setActiveConfirm] = useState<{\n    message: string;\n    handleConfirm: MouseEventHandler<HTMLButtonElement>;\n    handleCancel: MouseEventHandler<HTMLButtonElement>;\n  } | null>(null);\n\n  /**\n   * Create a promise that resolves when the user confirms the action\n   * and rejects when the user cancels the action\n   * @param message\n   * @returns\n   */\n  const confirm = (message: string): Promise<boolean> => {\n    return new Promise<boolean>((resolve) => {\n      const handleConfirm: MouseEventHandler<HTMLButtonElement> = (e) => {\n        e.preventDefault();\n        e.stopPropagation();\n        setActiveConfirm(null);\n        resolve(true);\n      };\n\n      const handleCancel: MouseEventHandler<HTMLButtonElement> = (e) => {\n        e.preventDefault();\n        e.stopPropagation();\n        setActiveConfirm(null);\n        resolve(false);\n      };\n      setActiveConfirm({ message, handleConfirm, handleCancel });\n    });\n  };\n\n  return (\n    <ConfirmationContext.Provider value={{ confirm }}>\n      <Modal\n        open={!!activeConfirm}\n        dimmer\n        onClose={activeConfirm?.handleCancel || noop}\n      >\n        <Dialog.Panel className="flex relative bg-white rounded-2xl shadow dark:bg-gray-800 max-w-[80vw] h-auto flex-col space-y-2 m-4 text-gray-900 dark:text-white">\n          <Dialog.Title className="text-lg font-semibold p-4">\n            Confirm action\n          </Dialog.Title>\n          <Dialog.Description className="p-4">\n            {activeConfirm?.message}\n          </Dialog.Description>\n          <div className="flex justify-end p-4 space-x-2">\n            <button\n              onClick={activeConfirm?.handleCancel}\n              className="px-4 py-4 text-sm font-semibold text-gray-500 bg-gray-200 rounded-lg dark:bg-gray-700 dark:text-gray-300"\n            >\n              Cancel\n            </button>\n            <button\n              onClick={activeConfirm?.handleConfirm}\n              className="px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-lg dark:bg-blue-600"\n            >\n              Confirm\n            </button>\n          </div>\n        </Dialog.Panel>\n      </Modal>\n      {children}\n    </ConfirmationContext.Provider>\n  );\n};\n\nexport default ConfirmationProvider;\n\nexport const useConfirm = () => React.useContext(ConfirmationContext);\n'})})]})}function d(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(m,{...n})}):m(n)}},8453:(n,e,o)=>{o.d(e,{R:()=>i,x:()=>s});var t=o(6540);const r={},a=t.createContext(r);function i(n){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);