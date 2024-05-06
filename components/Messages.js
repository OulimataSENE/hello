function Message({name, job, age}) {
    return (
        <p className="alert alert-success">
            <h1>
                This is a message from <b>{name}</b> who is a <b>{job}</b>,
                an he is {age} years old.
            </h1>
        </p>
    );
  }

  export default Message;