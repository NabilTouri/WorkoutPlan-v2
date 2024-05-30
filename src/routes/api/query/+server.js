import { mysqlconnFn } from "../../../hooks.server"
import { json } from '@sveltejs/kit'

export const GET = async () => {
    const mysqlconn = await mysqlconnFn()

    await mysqlconn.query(`
  INSERT INTO \`users\` (\`id\`, \`username\`, \`password\`, \`userAuthToken\`, \`name\`, \`surname\`, \`age\`, \`gender\`) VALUES
  (1, 'test', '$2b$10$GyWw9OK3CJ7.0PNrwbtbBe5OnmxG..fgR8Fz48y1AVWrf0CMgg/0i', '5311b16f-78b0-4049-9b4b-ea5d4fa9f315', 'nabil', 'touri', 18, 'male'),
  (2, 'NabilTouri', '$2b$10$7UqU5UUxTtmigtXUF3xg2.0ErySJwxEHlPUSAWM3pquftiHTy/Zh2', '73ce5ca6-9ce4-4a82-9a89-c66ddbc9c586', 'nabil', 'touri', 18, 'male'),
  (5, 'iaofsbfa', '$2b$10$F1SI1fWvpyFRmnP0gcCWM.TSRDR7VayUCUeS/0rqp/U0NTs7FtJ22', NULL, 'ciao', 'asobo', 87, 'male'),
  (6, 'noihiub', '$2b$10$ucH9jI2EmcENT9xIQWzNs.sqVH9QshZPL.m/uvIZ3axa9R9rmLkOi', NULL, 'sdfsfwe', 'dsdsdsvc', 87, 'male'),
  (7, 'disdufu', '$2b$10$cCXXelohTuo9.7JEkTKWyORmD70D0ZSTamksPnDXy4/6tSsw6TPCe', NULL, 'dwaf', 'ewfa', 88, 'male'),
  (8, 'Nabil', '$2b$10$c3CF2Gwuouh9x5f/jB..wej3RNdVcaIzSriCVFZa.ey2vCs56NCsG', NULL, 'Nabil', 'Touri', 18, NULL),
  (9, 'Aakash!!!!', '$2b$10$PXoeH28phCqeU8givDuZn.tKH67Yk5cY08GfSBt8QltUyxJ0hEbb6', '1c782dc1-6b05-40c9-9dec-5510f5b6b372', 'Aakash', 'Singh', 19, 'male'),
  (10, 'Nabil05', '$2b$10$hVm1C7tcfRCqpLWqRs43gOgdWkOnIaHpZJjI6w4iUn.zgpvhWgNe2', '48be3940-4c26-485b-a72f-5763d9a4ec7a', 'Nabil', 'Touri', 18, 'male')
`)
    .then(() => {
        console.log('Table days created')
        return json('Table days created')
    })
    .catch((err) => {
        console.log(200, err)
        return json(404, err)
    })

    const [rows] = await mysqlconn.query(`SELECT * FROM users`)

    return json(rows)
}
    //    ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
      
    //   -- Table structure for table `trainings`
    //   CREATE TABLE `trainings` (
    //     `id` int(11) NOT NULL AUTO_INCREMENT,
    //     `day_id` int(11) DEFAULT NULL,
    //     `exercise_id` int(11) DEFAULT NULL,
    //     `sets` int(11) DEFAULT NULL,
    //     `repetitions` int(11) DEFAULT NULL,
    //     `user_id` int(11) DEFAULT NULL,
    //     PRIMARY KEY (`id`),
    //     KEY `day_id` (`day_id`),
    //     KEY `exercise_id` (`exercise_id`),
    //     KEY `user_id` (`user_id`),
    //     CONSTRAINT `trainings_ibfk_1` FOREIGN KEY (`day_id`) REFERENCES `days` (`id`),
    //     CONSTRAINT `trainings_ibfk_2` FOREIGN KEY (`exercise_id`) REFERENCES `exercises` (`id`),
    //     CONSTRAINT `trainings_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
    //   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
      
    //   -- Table structure for table `users`
    //   
