"use strict";
// TYPE ENUM
// nao existe no javascript
var DesignColors;
(function (DesignColors) {
    DesignColors["white"] = "#FFFFFF";
    DesignColors["black"] = "#000000";
})(DesignColors || (DesignColors = {}));
console.log(DesignColors.black);
var StatusPermission;
(function (StatusPermission) {
    StatusPermission[StatusPermission["admin"] = 0] = "admin";
    StatusPermission[StatusPermission["user"] = 1] = "user";
})(StatusPermission || (StatusPermission = {}));
console.log(StatusPermission.admin);
console.log(StatusPermission.user);
