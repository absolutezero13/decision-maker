//
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options,
    };
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }
  componentWillUnmount() {
    console.log("unmount");
  }
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }
  handlePick() {
    return this.setState(() =>
      alert(this.state.options[Math.floor(Math.random() * 3)])
    );
  }
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      }),
    }));
  }
  handleAddOption(option) {
    if (!option) {
      return "Enter valid value kekw!";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option is already in your ass.";
    }
    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  }
  render() {
    const subtitle = "Put your life in the hands of me";
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}
IndecisionApp.defaultProps = {
  options: [],
};
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
};
Header.defaultProps = {
  title: "Indecision App",
};
const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What should I do?
      </button>
    </div>
  );
};
const Option = (props) => {
  return (
    <div>
      {" "}
      {props.optionText}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        Delete
      </button>
    </div>
  );
};
const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}> Remove All</button>
      {props.options.length === 0 && <p>Please Add Options to get start.</p>}
      {props.options.map((e, i) => (
        <Option
          key={i}
          optionText={e}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined,
    };
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => ({ error }));
    if (!error) {
      e.target.elements.option.value = "";
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p> {this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

// const User = (props) => {
//   return (
//     <div>
//       <p> Name:{props.name} </p>
//       <p>Age : {props.age} </p>
//     </div>
//   );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
