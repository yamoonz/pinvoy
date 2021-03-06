import React from 'react';
import { CsvToHtmlTable } from 'react-csv-to-table';
import ReactFileReader from 'react-file-reader';
import './App.css';

const sampleData = `a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,y,z`;

class App extends React.Component {
  state={
    csvData: null,
    setCsvFile: null
  };

  render(){
      return <div className="container">
      <h3>Pivony</h3>
      <div className="field">
        <ReactFileReader 
          multipleFiles={false}
          fileTypes={[".csv"]} 
        handleFiles={this.handleFiles}>
        
          <button className='btn'>Upload</button>
          <br/>
          </ReactFileReader>
        <CsvToHtmlTable   
          data={this.state.csvData || sampleData}
          csvDelimiter=","
          tableClassName="table table-striped table-hover"
        />
      </div>;
      </div>
    }

  handleFiles = files => {
    var reader = new FileReader();
    reader.onload =  (e) => {
      // Use reader.result
      this.setState({
        csvData: reader.result
      })
    }
    reader.readAsText(files[0]);
  }

}

export default App;
