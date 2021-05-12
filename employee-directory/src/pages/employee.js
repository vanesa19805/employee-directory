import { Component } from "react";
import api from "../utils/API";
import EmployeeCard from "../components/EmployeeCard";
import SearchBar from "../components/SearchBar";
import Title from "../components/Title";
 import moment from "moment"

class Employee extends Component {
    state = {
        employees: []
    };
    componentDidMount() {
        api.getRandomEmployee().then(users => {
            this.setState({ employees: users.data.results })
        })
    }
    render() {
      return  <>
          <Title/>
          <SearchBar  />
          {this.state.employees.length > 0 ? this.state.employees.map(person =>{
              return(
                <EmployeeCard
                name={person.name.first + " " + person.name.last}
                image={person.picture.large}
                phone= {person.phone}
                email={person.email}
                dob={  moment(person.dob.date).format("MM/DD/YYYY")}

                />
              )
          }):"no search found"}
        </>
    }
}


export default Employee;