import { lazy } from "react";

const DeveloperProfile=lazy(()=>import('./components/DeveloperProfile'))
const UpdateProfile=lazy(()=>import('./components/UpdateProfile'))

export {DeveloperProfile,UpdateProfile};