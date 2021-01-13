class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      visible: false,
    };
  }
  toggle() {
    this.setState((prevState) => {
      return { visible: !prevState.visible };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggle}>
          {this.state.visible ? "Hide Details" : "Show Details"}
        </button>
        {this.state.visible && <p>Blah blah these are details</p>}
      </div> // Burası garip
    );
  }
}
ReactDOM.render(<Visibility />, document.getElementById("app"));
// let visible = false;
// const appRoot = document.getElementById("app");
// const toggle = () => {
//   visible = !visible;
//   //   return <p> Hey ne kadar da harika detaylar la bunlar?</p>;
//   render();
// };

// const render = () => {
//   const visibility = (
//     <div className="wrapper">
//       <h1> Visibility Toggle</h1>
//       <button onClick={toggle}>
//         {visible ? "Hide Details" : "Show Details"}
//       </button>
//       {visible && (
//         <div>
//           {" "}
//           <p>Hey Details kekw</p>
//         </div>
//       )}
//     </div>
//   );
//   ReactDOM.render(visibility, appRoot);
// };

// render();
