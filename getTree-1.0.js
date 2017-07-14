function getTree(data, level = 0, id = 0, index = 0) {

  let output = [];

  /*
  ** Если parent = null, то добавляем в output новый обьект с
  ** id, title и level = 0. Приступаем к поиску детей, для 
  ** этого передаем изначальный массив (data), level = 1, id 
  ** родителя и номер следующей позиции в начальном массиве.
  */

  if (index < data.length && data[index]['parent'] === null ) {
    for (let i = 0; i < data.length; i++) {
      if (data[i]['parent'] === null && level === 0) {                                     
        output.push(                                                                    
          {                                                                      
            id: data[i]['id'],                                              
            title: data[i]['title'],                                        
            level: 0,                                                       
            children: getTree(data, 1, data[i]['id'], i + 1)    
          }
        );
      } else if (data[i]['parent'] === null && level != 0) {
        return getTree(data, 1, id, i + 1);
      }
    }
  } 
  
  /*
  ** Если parent != null, то проходим по всему массиву начиная
  ** со следующей позиции сравнивая id родителя и ребенка. Если 
  ** id родителя и parent ребонка совпадают, то добавляем 
  ** ребенка в массив иначе пропускаем.
  */

  else {
    for (let i = 0; i < data.length; i++) {
      if (data[i]['parent'] === id) {
        output.push(
          {                                                                      
            id: data[i]['id'],                                              
            title: data[i]['title'],                                        
            level: level,                                                       
            children: getTree(data, level + 1, data[i]['id'], index + 1)    
          }
        );
      }
    }

    if (output.length === 0) {
      return null;
    } else {
      return output;
    }
  }
  return output;
}