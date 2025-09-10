
import { setting } from '../../settings';
import Token from "../get-token"; 

export const getBuildings = async () => {
  const response = await Token.post('', {
    request_TYPE: 'GET',
    request_URI: `${setting.servicePath}building`,
    request_BODY: ''
    }).then((response) => {
        if (response.data && response.data.length > 0) {
            return getAllDetail(response.data);
        } else {
            return null;
        }
    })
    .catch((error) => {
        console.log(JSON.stringify(error));
        return null;
    });
return response;
};

export const getAllBuildings = async () => {
  const response = await Token.post('', {
    request_TYPE: 'GET',
    request_URI: `${setting.servicePath}building/all`,
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
        console.log(JSON.stringify(error));
        return null;
    });
return response;
};

export const getOneBuilding = async (id) => {
  const response = await Token.post('', {
    request_TYPE: 'GET',
    request_URI: `${setting.servicePath}building/${id}/detail`,
    request_BODY: ""
})
    .then((response) => {
        return getAllDetail(response.data);
    })
    .catch((error) => {
        console.log(JSON.stringify(error));
        return null;
    });
return response;
};

export const addBuilding = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'POST',
    request_URI: `${setting.servicePath}building`,
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
        console.log(JSON.stringify(error));
        return null;
    });
return response;
};

export const updateBuilding = async (data, id) => {
  const response = await Token.post('', {
    request_TYPE: 'PUT',
    request_URI: `${setting.servicePath}building/${id}`,
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
        console.log(JSON.stringify(error));
        return null;
    });
return response;
};

export const updateAllBuildings = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'PUT',
    request_URI: `${setting.servicePath}building`,
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
        console.log(JSON.stringify(error));
        return null;
    });
return response;
};

export const deleteBuilding = async (id) => {
  const response = await Token.post('', {
    request_TYPE: 'DELETE',
    request_URI: `${setting.servicePath}building/${id}`,
    request_BODY: '',
})
    .then((response) => {
        if (response.data && response.data.length > 0) {
            return getAllDetail(response.data);
        } else {
            return null;
        }
    })
    .catch((error) => {
        console.log(JSON.stringify(error));
        return null;
    });
return response;
};

export const searchBuilding = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'POST',
    request_URI: `${setting.servicePath}building/search`,
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
        console.log(JSON.stringify(error));
        return null;
    });
return response;
};

export const searchAllBuildings = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'POST',
    request_URI: `${setting.servicePath}building/search/all`,
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
        console.log(JSON.stringify(error));
        return null;
    });
return response;
};

export const advancedSearchBuilding = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'POST',
    request_URI: `${setting.servicePath}building/advancedsearch`,
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
        console.log(JSON.stringify(error));
        return null;
    });
return response;
};

export const advancedSearchAllBuildings = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'POST',
    request_URI: `${setting.servicePath}building/advancedsearch/all`,
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
        console.log(JSON.stringify(error));
        return null;
    });
return response;
};

export const getAllDetail = (response) => {
  return response.map(building => getDetail(building));
};

export const getDetail = (response) => {
     if (response.campus_DETAIL != null) {
      response.campus = this.campusservice.getDetail(JSON.parse(response.campus_DETAIL));
      response.campus_DETAIL = null;
      response.university_ID = response.campus.university_ID;
    }

  return response;
};