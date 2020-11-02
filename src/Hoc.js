import React, { Component } from 'react'
const UpdatedComponent = (OrginalComponent) => {

   class Hoc extends Component {
       render() {
           return (<OrginalComponent/>
           )
       }
   }

   render(<Hoc/>)
   
}
