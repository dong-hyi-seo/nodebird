module.exports = (sequelize, DataTypes) => {
    const Hashtag = sequelize.define('Hashtag', {//mysql Hashtag 테이블 생성
        //id가 기본적으로 들어감
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
    }, {
        modelName: 'Hashtag',
        tableName: 'hashtags',
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });
    Hashtag.associate = (db) => {
        db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });
    };
    return Hashtag;
}