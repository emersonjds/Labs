// Criar usuario . name , passwd, email 

interface SecondTech  {
  title: string;
  experience: string | number;
}

interface CreateUserData {
	name?: string;
	email: string;
  passwd: string;
  techs: string[] // para tipos com informacao unica
  secondTechs: Array<string | SecondTech> // para arrays mistos
}

export default function createUser({name  = '', email, passwd}: CreateUserData) {
	const user = {
    name, 
    email, 
    passwd
	}
	return user;
}
