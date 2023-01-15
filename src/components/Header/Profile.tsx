import React from 'react';
import styled from 'styled-components';
import ContactIcons from '../Icons/Icons';

function Profile() {
  return (
    <Styled.profile>
        <img src="./images/profile.png" alt="profile"/>
        <ContactIcons/>
    </Styled.profile>
  )
}

export default Profile;

const Styled = {
    profile: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        img {
            width: 75%;
            height: 75%;
            @media (max-width: 650px) {
                width: 55%;
                height: 55%;
            }
        }
    `
}