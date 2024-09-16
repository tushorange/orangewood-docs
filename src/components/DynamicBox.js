import React, { useState, useEffect } from 'react';
import { ArrowExpandAllRegular, ArrowCollapseAllRegular } from '@fluentui/react-icons';

const DynamicBox = ({
  titleText,
  listText,
  caption = "Joint angles of the robot in radians, encoded as 6 floating point values.",
  description = `JointRotations = List [
  Joint 0: f64
  Joint 1: f64
  Joint 2: f64
  Joint 3: f64
  Joint 4: f64
  Joint 5: f64
  ]`,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(darkMode);
  }, []);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const styles = {
    container: {
      borderRadius: '12px',
      padding: '20px',
      backgroundColor: isDarkMode ? '#303030' : '#ffffff',
      marginTop: '40px',
      marginLeft: '0',
      marginBottom: '20px',
      maxWidth: '600px',
      boxShadow: isDarkMode ? '0px 4px 8px rgba(255, 255, 255, 0.1)' : '0px 4px 8px rgba(0, 0, 0, 0.1)',
    },
    title: {
      margin: '0',
      fontSize: '1.125rem',
      fontWeight: '600',
      color: isDarkMode ? '#ffffff' : '#303030',
    },
    list: {
      margin: '0 10px',
      fontSize: '0.875rem',
      color: '#f97316',
      fontWeight: '500',
    },
    caption: {
      fontSize: '1rem',
      color: isDarkMode ? '#f5f5f5' : '#555',
      marginTop: '12px',
    },
    description: {
      fontSize: '1rem',
      color: isDarkMode ? '#f5f5f5' : '#555',
      marginTop: '12px',
      whiteSpace: 'pre-wrap',
    },
    highlightedText: {
      color: '#f97316',
    },
    f64Text: {
      color: '#87CEEB', // Sky blue for f64
    },
    button: {
      padding: '2px 8px',
      backgroundColor: 'transparent',
      color: '#f97316',
      border: `1px solid #f97316`,
      borderRadius: '16px',
      fontSize: '0.75rem',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h3 style={styles.title}>{titleText}</h3>
          <h4 style={styles.list}>{listText}</h4>
        </div>

        <button onClick={toggleDescription} style={styles.button}>
          {isExpanded ? (
            <>
              <ArrowCollapseAllRegular />
              Collapse Details
            </>
          ) : (
            <>
              <ArrowExpandAllRegular />
              Expand Details
            </>
          )}
        </button>
      </div>

      <p style={styles.caption}>{caption}</p>

      {isExpanded && (
        <pre style={styles.description}>
          <span style={styles.highlightedText}>
            JointRotations = List [
          </span>
          <br />
          Joint 0: <span style={styles.f64Text}>f64</span>
          <br />
          Joint 1: <span style={styles.f64Text}>f64</span>
          <br />
          Joint 2: <span style={styles.f64Text}>f64</span>
          <br />
          Joint 3: <span style={styles.f64Text}>f64</span>
          <br />
          Joint 4: <span style={styles.f64Text}>f64</span>
          <br />
          Joint 5: <span style={styles.f64Text}>f64</span>
          <br />
          <span style={styles.highlightedText}>]</span>
        </pre>
      )}
    </div>
  );
};

export default DynamicBox;
