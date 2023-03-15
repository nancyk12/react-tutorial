function Clock(props) {
    const element = (
        <div>
            <h1>Hello, World!</h1>
            <h2>It is {props.date}.</h2>
        </div>
    );
    return element;
  }

  setInterval(Clock, 1000);