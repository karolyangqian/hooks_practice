import {useState, useEffect} from 'react';
import { apiCall } from '../service';
import {API_URL} from '../constants'
import { StyledDiv } from '../components/StyledDiv.style';
import {Button} from '../components/StyledButton.style'

interface IState {
    name: string, 
    height: string, 
    mass: string, 
    hair_color: string, 
    skin_color: string, 
    eye_color: string, 
    birth_year: string, 
    gender: string, 
    homeworld: string, 
}

export function Characters(props:any) {
    const [user, setUser] = useState<IState>()
    useEffect(() => {
      apiCall(API_URL.users+'/'+props.index)
        .then((data: any) => {
            let temp = {
                name: data.name, 
                height: data.height, 
                mass: data.mass, 
                hair_color: data.hair_color, 
                skin_color: data.skin_color, 
                eye_color: data.eye_color, 
                birth_year: data.birth_year, 
                gender: data.gender, 
                homeworld: data.homeworld,
            }
          setUser(temp)
        });
        console.log(user)
    });
    return(
        <StyledDiv>
            <Button as={'a'} href='/'>Back to home</Button>                
            <h1>{user?.name}</h1>
            <h2>height: {user?.height}</h2>
            <h2>mass: {user?.mass}</h2>
            <h2>hair color: {user?.hair_color}</h2>
            <h2>skin color: {user?.skin_color}</h2>
            <h2>eye color: {user?.eye_color}</h2>
            <h2>birth year: {user?.birth_year}</h2>
            <h2>gender: {user?.gender}</h2>
            <h2>homeworld: <a href={user?.homeworld} target='_blank'>{user?.homeworld}</a></h2>
        </StyledDiv>
    )
}