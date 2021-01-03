module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {//mysql Comment 테이블 생성
        //id가 기본적으로 들어감
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
    });
    Comment.associate = (db) => {
        //belongsTo 설정하면 user의 id와 post의 id가 생김
        db.Comment.belongsTo(db.User);
        db.Comment.belongsTo(db.Post);
    };
    return Comment;
}