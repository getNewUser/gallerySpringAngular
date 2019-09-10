package com.vnev.idk.DAO.UserRole;


import com.vnev.idk.Security.model.Role;
import com.vnev.idk.Security.model.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(RoleName roleName);
}
