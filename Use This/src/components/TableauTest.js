import React from "react";
import Tableau from "tableau-api";

//This will show up on the left hand side of the next slide
class TableauTest extends React.Component {
  initTableau() {
    //put your url here
    const vizUrl =
      "https://public.tableau.com/shared/H777G5DMC?:display_count=y&:origin=viz_share_link";

    //all your options
    const options = {
      hideTabs: true,
      width: "700px",
      height: "800px",
      onFirstInteractive: () => {
        console.log("it worked");
      }
    };
    //let viz = new window.tableau.Viz(vizContainer, vizUrl)

    let viz = new Tableau.Viz(this.container, vizUrl, options);
  }

  render() {
    return <div ref={c => (this.container = c)} 
    //this will adjust where the component actually goes
    />;
  }

  componentDidMount() {
    this.initTableau();
  }
}

export default TableauTest;