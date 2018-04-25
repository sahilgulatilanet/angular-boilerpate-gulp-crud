angular.module('students')
.controller('studentCtrl',function ($scope,studentsvc) {
    studentsvc.fetchStudents().then(function (students) {
        $scope.students=students
    });
    $scope.updClick=function(id){
        studentsvc.updStudData(id).then(function (stud) {
            $scope.studData=stud
            $scope.stud.id=stud.id
            $scope.stud.nm=stud.nm
            $scope.stud.ad=stud.ad
        })
    }
    $scope.updData=function () {
        var data={
            id:$scope.stud.id,
            nm:$scope.stud.nm,
            ad:$scope.stud.ad
        }
        studentsvc.updStud(data).then(function (msg) {
            console.log(msg)
        })
    }
    $scope.delClick=function (id) {
        studentsvc.delStud(id).then(function (msg) {
            console.log(msg)
        })
    }
    $scope.stud={
        id:'',
        nm:'',
        ad:''
    }
});