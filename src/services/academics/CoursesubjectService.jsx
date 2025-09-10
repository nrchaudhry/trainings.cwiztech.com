
import { setting } from '../../settings';
import Token from "../get-token"; 

export const getCoursesubject = async () => {
  const response = await Token.post('', {
    request_TYPE: 'GET',
    request_URI: `${setting.servicePath}coursesubject`,
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

export const getAllCoursesubject = async () => {
  const response = await Token.post('', {
    request_TYPE: 'GET',
    request_URI: `${setting.servicePath}coursesubject/all`,
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

export const getOneCoursesubject = async (id) => {
  const response = await Token.post('', {
    request_TYPE: 'GET',
    request_URI: `${setting.servicePath}coursesubject/${id}/detail`,
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

export const addCoursesubject = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'POST',
    request_URI: `${setting.servicePath}coursesubject`,
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

export const updateCoursesubject = async (data, id) => {
  const response = await Token.post('', {
    request_TYPE: 'PUT',
    request_URI: `${setting.servicePath}coursesubject/${id}`,
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

export const updateAllCoursesubject = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'PUT',
    request_URI: `${setting.servicePath}coursesubject`,
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

export const deleteCoursesubject = async (id) => {
  const response = await Token.post('', {
    request_TYPE: 'DELETE',
    request_URI: `${setting.servicePath}coursesubject/${id}`,
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

export const searchCoursesubject = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'POST',
    request_URI: `${setting.servicePath}coursesubject/search`,
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

export const searchAllCoursesubject = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'POST',
    request_URI: `${setting.servicePath}coursesubject/search/all`,
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

export const advancedSearchCoursesubject = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'POST',
    request_URI: `${setting.servicePath}coursesubject/advancedsearch`,
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

export const advancedSearchAllCoursesubject = async (data) => {
  const response = await Token.post('', {
    request_TYPE: 'POST',
    request_URI: `${setting.servicePath}coursesubject/advancedsearch/all`,
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
  return response.map(coursesubject => getDetail(coursesubject));
};

export const getDetail = (response) => {
    if (response.course_DETAIL != null) {
      response.course = this.courseservice.getDetail(JSON.parse(response.course_DETAIL));
      response.course_DETAIL = null
    }
  return response;
};