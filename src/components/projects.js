import React, {Component} from 'react';
import { Tabs, Tab} from 'react-mdl';

class Projects extends Component {
  constructor (props) {
    super (props);
    this.state = { activeTab: 0};
  }

  toggleCategories() {
    if(this.state.activeTab === 0){
      return(
      <div><h1>This is React</h1></div>
    )
    } else if (this.state.activeTab === 1){
        return (
          <div><h1>This is Swift</h1></div>
      )
    }
  }

  render() {
    return (
      <div className = "Category-tabs">
      <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
      <Tab>React</Tab>
      <Tab>Swift</Tab>
      <Tab>Hyperloop</Tab>
      <Tab>Moon Mission</Tab>
      </Tabs>

    <section className="projects-grid">
    {this.toggleCategories()}</section>
      </div>
    )
  }
}

export default Projects;
