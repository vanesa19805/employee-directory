import { Component } from "react";
import api from "../utils/API";
import EmployeeCard from "../components/EmployeeCard";
import SearchBar from "../components/SearchBar";
import Title from "../components/Title";
import moment from "moment"

class Employee extends Component {
    state = {
        employees: [],
        filterList: [],
        searchName:"",
    };
    componentDidMount() {
        api.getRandomEmployee().then(users => {
            this.setState({ employees: users.data.results, filterList: users.data.results })
        })
    }

    async handleInputChange (e){ 
        await this.setState({searchName: e.target.value})
        const originalName= this.state.employees
        if (this.state.searchName === "" ){
            console.log("nothing here")
            this.setState({filterList: originalName})
        }
        const newList= this.state.employees.filter((employee)=>{
            return employee.name.first.toLowerCase().includes(this.state.searchName.toLowerCase()) || employee.name.last.toLowerCase().includes(this.state.searchName.toLowerCase())
        })
        this.setState({filterList: newList})
    }

    render() {
      return  <>
          <Title/>
          <SearchBar search={this.state.searchName} handleInputChange= {this.handleInputChange.bind(this)}  />
          {this.state.filterList.length > 0 ? this.state.filterList.map(person =>{
              return(
                <EmployeeCard
                name={person.name.first + " " + person.name.last}
                image={person.picture.large}
                phone= {person.phone}
                email={person.email}
                dob={moment(person.dob.date).format("MM/DD/YYYY")}

                />
              )
          }):"no search found"}
        </>
    }
}


export default Employee;