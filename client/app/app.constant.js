(function(angular, undefined) {
  angular.module("kiwiSchoolApp.constants", [])

.constant("appConfig", {
	"userRoles": [
		"guest",
		"user",
		"admin"
	]
})

;
})(angular);