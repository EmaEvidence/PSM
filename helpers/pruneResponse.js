const pruneResponse = (data, type) => {
  if (Array.isArray(data)) {
    const newData = data.map((item) => {
      delete item.dataValues.createdAt;
      delete item.dataValues.updatedAt;
      return item.dataValues;
    });
    return newData;
  } if (Object.keys(data).length > 0 && type) {
    delete data.dataValues.createdAt;
    delete data.dataValues.updatedAt;
    return data;
  }
  if (Object.keys(data).length > 0) {
    delete data.createdAt;
    delete data.updatedAt;
    return data;
  }
}

export default pruneResponse;
