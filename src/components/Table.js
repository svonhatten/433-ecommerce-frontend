import React from 'react';

export default class Table extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: "",
      };
    }

    getTableHeaders() {
        let header = Object.keys(this.props.data)
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }

    getTableData() {
        let values = []
        for(var i in this.props.data){
            values.push([i, this.props.data[i]])
        }
        return values.map((key, index) => {
          if(typeof(key[1]) === "object") {
            return this.getLinkButtons(); //<td>links</td>
          }
          else {
            return <td key={index}>{key[1].toString()}</td>
          }
        })
    }

    getLinkButtons(){
      let links = this.props.data.links
      if(links != null){
        let i = 0;
        let array = []
        for(i = 0; i < links.length; i++){
          array.push(
          <form action={links[i].url} key={i}>
            <input type="submit" value={links[i].action} />
          </form>
          )
        }
        console.log("returned array")
        return <td key="link">{array}</td>
      }
      else {
        console.log("returned nothing")
        return <td key="link">none</td>
      }
    }

    render() {
      return (
        <div>
          <table>
            <thead>  
                <tr>
                    {this.getTableHeaders()}
                </tr>
            </thead>
            <tbody>
                <tr>
                  {this.getTableData()}
                </tr>  
            </tbody>
          </table>
        </div>
      );
    }
  }
