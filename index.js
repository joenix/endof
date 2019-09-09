const endof = (source = [], clone = true) => {
  if (source === undefined) {
    return new Error("please enter valid data .");
  }

  if (source.constructor === Array) {
    return clone ? [...source].pop() : source[source.length - 1];
  }

  if (source.constructor === Object) {
    return endof(
      Object.keys(source).map(key => {
        return (json => ((json[key] = source[key]), json))({});
      }),
      clone
    );
  }
};

export default endof;
