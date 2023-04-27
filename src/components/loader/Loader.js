import PropTypes from 'prop-types'
import { useState, useEffect } from 'react';

function Loader({ children }) {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return isLoading ? <></> : children;
}

export default Loader;

Loader.propTypes = {
  children: PropTypes.node.isRequired,
}