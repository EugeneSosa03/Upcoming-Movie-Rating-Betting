import React from 'react'
import ProfileButton from './ProfileButton'
import LoginButton from './LoginButton'
import styled from 'styled-components'

export default function ProfileLoginBar() {
  return (
    <Bar>
        <ProfileButton/>
        <LoginButton/>
    </Bar>
  )
}

const Bar = styled.div`
`