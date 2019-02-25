navigator.geolocation.getCurrentPosition(
    position => {
      const location = JSON.stringify(position);
  
      this.setState({ location });
    },
    error => Alert.alert(error.message),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  );