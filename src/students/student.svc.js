angular.module('students')
.service('studentsvc',function ($http) {
    this.fetchStudents=function () {
        return $http.get('http://localhost/angularapi/view_stud.php').then(function (response) {
            return response.data
        })
    }
    this.updStudData=function (sid) {
        //console.log(sid);
        //return sid;
        var data={
            id:sid
        };
        return $http.post('http://localhost/angularapi/update_data_stud.php',data).then(function (response) {
            return response.data
        });
    }
    this.updStud=function (data) {
        return $http.post('http://localhost/angularapi/update_stud.php',data).then(function (response) {
            return response.data
        })
    }
    this.delStud=function (sid) {
        var data={
            id:sid
        };
        return $http.post('http://localhost/angularapi/delete_stud.php',data).then(function (response) {
            return response.data
        })
    }
    this.insStud=function (data) {
        return $http.post('http://localhost/angularapi/insert_stud.php',data).then(function (response) {
            return response.data
        })
    }
})