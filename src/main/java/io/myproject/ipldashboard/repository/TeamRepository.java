package io.myproject.ipldashboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import io.myproject.ipldashboard.model.Team;

public interface TeamRepository extends JpaRepository<Team, Long> {

    Team findByTeamName(String teamName);

}
