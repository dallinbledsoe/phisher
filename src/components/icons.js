import React from 'react'
 
import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
 
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

const Icons = () => {
library.add(faBars, faUser, faTwitter, faFacebook)
}
 
export default Icons