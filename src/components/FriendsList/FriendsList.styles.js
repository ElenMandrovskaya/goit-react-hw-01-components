import styled from '@emotion/styled'

export const Friendslist = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none; 
    margin: 20px;
    padding: 0;
    width: 30%;
`
    ;
export const FriendsCard = styled.li`
    display: flex;
    align-items: flex-start;
    background-color: #fff;
    width: 330px;
    margin-bottom: 10px;
    box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
    padding: 20px;
`
    ;

export const Online = styled.span`
background-color: green;
width: 20px;
height: 20px;
border-radius: 50%;
margin-right: 20px;
`
    ;
export const Offline = styled.span`
background-color: red;
width: 20px;
height: 20px;
border-radius: 50%;
margin-right: 20px;
`
    ;

export const FriendAvatar = styled.img`
background-color: #d4c7cb;
padding: 5px;
border-radius: 4px;
margin-right: 20px;
`
    ;

export const FriendName = styled.p`
font-size: 20px;
font-weight: 600;

`
    ;