package tests.mocks

import business.entities.UserReal
import persistence.dao.UserDao
import tests.util.SetValidator

class UserDaoMock() : SetValidator(), UserDao {

    override fun getUserById(id: Int): UserReal? {
        addCurrentMethodToSet()
        return UserMock()
    }
}