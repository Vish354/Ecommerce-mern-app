const reportWebVitals = (onPerfEntry) => {
  if (typeof onPerfEntry === "function") {
    import("web-vitals")
      .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      })
      .catch((err) => {
        console.log("Web Vitals load error:", err);
      });
  }
};

export default reportWebVitals;