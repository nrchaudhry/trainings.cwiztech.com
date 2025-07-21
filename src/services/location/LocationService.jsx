import { setting } from '../../settings';
import Token from "../get-token"; 

export const getLocation = async () => {
  const response = await Token.post('', {
    request_TYPE: 'GET',
    request_URI: `${setting.servicePath}location`,
    request_BODY: ''
})
    .then((response) => {
        if (response.data && response.data.length > 0) {
            return getAllDetail(response.data);
        } else {
            return null;
        }
    })
    .catch((error) => {
        return null;
    });
return response;
};

export const getAllLocation = async () => {
  const response = await Token.post('', {
    request_TYPE: 'GET',
    request_URI: `${setting.servicePath}location/all`,
    request_BODY: ''
})
    .then((response) => {
        if (response.data && response.data.length > 0) {
            return getAllDetail(response.data);
        } else {
            return null;
        }
    })
    .catch((error) => {
        return null;
    });
return response;
};

export const getOneLocation = async (id) => {
  const response = await Token.post('', {
    request_TYPE: 'GET',
    request_URI: `${setting.servicePath}location/${id}/detail`,
    request_BODY: ""
})
    .then((response) => {
        return getDetail(response.data);
    })
    .catch((error) => {
        return null;
    });
return response;
};

export const addLocation = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'POST',
    request_URI: `${setting.servicePath}location`,
    request_BODY: JSON.stringify(data),
})
    .then((response) => {
        if (response.data && response.data.length > 0) {
            return getDetail(response.data);
        } else {
            return null;
        }
    })
    .catch((error) => {
        return null;
    });
return response;
};

export const updateLocation = async (data, id) => {
  const response = await Token.post('', {
    request_TYPE: 'PUT',
    request_URI: `${setting.servicePath}location/${id}`,
    request_BODY: JSON.stringify(data),
})
    .then((response) => {
        if (response.data && response.data.length > 0) {
            return getDetail(response.data);
        } else {
            return null;
        }
    })
    .catch((error) => {
        return null;
    });
return response;
};

export const updateAllLocation = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'PUT',
    request_URI: `${setting.servicePath}location`,
    request_BODY: JSON.stringify(data),
})
    .then((response) => {
        if (response.data && response.data.length > 0) {
            return getAllDetail(response.data);
        } else {
            return null;
        }
    })
    .catch((error) => {
        return null;
    });
return response;
};

export const deleteProductLocation = async (id) => {
  const response = await Token.post('', {
    request_TYPE: 'DELETE',
    request_URI: `${setting.servicePath}location/${id}`,
    request_BODY: '',
})
    .then((response) => {
        if (response.data && response.data.length > 0) {
            return getDetail(response.data);
        } else {
            return null;
        }
    })
    .catch((error) => {
        return null;
    });
return response;
};

export const searchLocation = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'POST',
    request_URI: `${setting.servicePath}location/search`,
    request_BODY: JSON.stringify(data),
})
    .then((response) => {
        if (response.data && response.data.length > 0) {
            return getAllDetail(response.data);
        } else {
            return null;
        }
    })
    .catch((error) => {
        return null;
    });
return response;
};

export const searchAllLocation = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'POST',
    request_URI: `${setting.servicePath}location/search/all`,
    request_BODY: JSON.stringify(data),
})
    .then((response) => {
        if (response.data && response.data.length > 0) {
            return getAllDetail(response.data);
        } else {
            return null;
        }
    })
    .catch((error) => {
        return null;
    });
return response;
};

export const advancedSearchLocation = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'POST',
    request_URI: `${setting.servicePath}location/advancedsearch`,
    request_BODY: JSON.stringify(data),
})
    .then((response) => {
        if (response.data && response.data.length > 0) {
            return getAllDetail(response.data);
        } else {
            return null;
        }
    })
    .catch((error) => {
        return null;
    });
return response;
};

export const advancedSearchAllLocation = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'POST',
    request_URI: `${setting.servicePath}location/advancedsearch/all`,
    request_BODY: JSON.stringify(data),
})
    .then((response) => {
        if (response.data && response.data.length > 0) {
            return getAllDetail(response.data);
        } else {
            return null;
        }
    })
    .catch((error) => {
        return null;
    });
return response;
};

export const getAllDetail = (response) => {
  return response.map(location => getDetail(location));
};

export const getDetail = (response) => {
  if (response.locationleveltype_DETAIL) {
    response.locationleveltype = JSON.parse(response.locationleveltype_DETAIL);
    response.locationleveltype_DETAIL = `${response.locationleveltype.code} - ${response.locationleveltype.description}`;
  }
  return response;
};
