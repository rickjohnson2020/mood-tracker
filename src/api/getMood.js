const toJson = async (res) => {
  const json = await res.json();
  if(res.ok){
    return json;
  }else{
    throw new Error(json.message);
  }
}

// 一覧を取得　　フェッチ先をlocalからherokuに変更
export const getMood = async () =>{
  const res = await fetch('http://mood-tracking-app.herokuapp.com/api/v1/mood/', {
    method: 'GET',
    mode: 'cors'
  })
  return await toJson(res);
}

// 詳細を取得
export const getMoodDetail = async (id) => {
  const res = await fetch(`http://mood-tracking-app.herokuapp.com/api/v1/mood/${id}`, {
    method : 'GET',
    mode: 'cors'
  })
  return await toJson(res);
}
