import React from 'react'
import { withNavbar } from '../../decorators/withNavbar';


interface HomeProps {

}

const Home: React.FC<HomeProps> = ({}) => {
        return (<div>Homepage</div>);
}

export default withNavbar(Home);