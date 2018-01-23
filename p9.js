module.exports =
    (string, len = string.length) => {
      if (len < 0) { return 'Number of exclamations to be added cant be negative'; }
      return string + '!'.repeat(len);
    };
