import "./styles.css";

// 追加ボタンをクリックすると、入力された値をJSの変数として受け取り
//JS側でDOMを生成して未完了のTODOにHTMLを追加する。

const onClickAdd = () => {
  //テキストボックスの値を受け取り、値を初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //未完了リストに追加する関数でinputTextを使えるように
  createIncompleteList(inputText);
};

//ボタンを押したときに要素を削除する変数
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-lists").removeChild(target);
};
const deleteFromcompleteList = (target) => {
  document.getElementById("complete-lists").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //liの生成
  const li = document.createElement("li");
  li.className = "list-row";

  //divの生成
  const div = document.createElement("div");
  div.className = "list-inner";
  // div.innerText = inputText;

  //pタグを生成
  const p = document.createElement("p");
  p.className = "list-title";
  p.innerText = text;

  //完了ボタン生成
  const completeButton = document.createElement("button");
  completeButton.className = "list-btn";
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //完了ボタンを押すと未完了リストの欄から削除する関数
    deleteFromIncompleteList(div.parentNode);

    //完了リストに追加する要素
    const addTarget = div.parentNode;

    // todo内容テキスト取得
    const text = div.firstElementChild.innerText;

    //div以下を初期化
    div.textContent = null;

    //list title の生成
    p.innerText = text;

    //戻すbuttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    //未完了に戻す
    backButton.addEventListener("click", () => {
      deleteFromcompleteList(addTarget);

      //テキスト取得
      const text = div.firstElementChild.innerText;

      //最初の追加されたliが追加されるので、ボタンを追加したり削除しなくても良いので、記述量が少ない。
      createIncompleteList(text);

      //自分で考えた処理　　内容を一度初期化やボタンの追加、削除で記述量が多い
      // div.textContent = null;
      // addTarget.appendChild(div);
      // div.appendChild(p);
      // div.appendChild(completeButton);
      // div.appendChild(deleteButton);
      //完了リストに追加
      // document.getElementById("incomplete-lists").appendChild(addTarget);
    });

    //liタグの子要素に各要素を配置
    addTarget.appendChild(div);
    div.appendChild(p);
    div.appendChild(backButton);

    document.getElementById("complete-lists").appendChild(li);
  });

  //削除ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.className = "list-btn";
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //削除ボタンが押されたらliを削除する
    deleteFromIncompleteList(div.parentNode);
  });

  //liタグの子要素に各要素を配置
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-lists").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
