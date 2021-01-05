module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {//mysql Post 테이블 생성
        //id가 기본적으로 들어감
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    }, {
        modelName: 'Post',
        tableName: 'posts',
        charset: 'utf8mb4', //한글 + 이모티콘까지 넣으려면 해당 charset 해야함.
        collate: 'utf8mb4_general_ci',
    });
    Post.associate = (db) => {
        db.Post.belongsTo(db.User); //User와 1:다
        db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' }); //다 대 다 개념
        db.Post.hasMany(db.Comment);
        db.Post.hasMany(db.Image);

        //중간테이블이 생김 사용자와 게시글의 좋아요 관계 (through는 중간테이블명 변경)
        db.Post.belongsToMany(db.User, { through : 'Like', as: 'Likers' });
        db.Post.belongsTo(db.Post, { as: 'Retweet' });
    };
    return Post;
}