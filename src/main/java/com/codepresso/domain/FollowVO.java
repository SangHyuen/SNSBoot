package com.codepresso.domain;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class FollowVO {

	
	int followerId;
	int followeeId;
	String createdAt;
	
	
	public int getFolloweeId() {
		return followeeId;
	}
	public void setFolloweeId(int followeeId) {
		this.followeeId = followeeId;
	}
	
	public int getFollowerId() {
		return followerId;
	}
	public void setFollowerId(int follower_id) {
		this.followerId = follower_id;
	}

	public String getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(String createdAt) {
		this.createdAt = createdAt;
	}
	@Override
	public String toString() {
		return "FollowVO [  followee_id=" + followeeId + ", follower_id=" + followerId
				+  ", createdAt=" + createdAt + "]";
	}

	
}
