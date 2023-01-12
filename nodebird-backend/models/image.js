module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('Image', {//mysql Hashtag 테이블 생성
        //id가 기본적으로 들어감
        src: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
    }, {
        modelName: 'Image',
        tableName: 'images',
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });
    Image.associate = (db) => {
        db.Image.belongsTo(db.Post);
    };
    return Image;
}