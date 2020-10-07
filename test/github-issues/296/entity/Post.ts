import {Entity, JoinColumn, OneToMany, OneToOne} from "../../../../src";
import {PrimaryGeneratedColumn} from "../../../../src";
import {Column} from "../../../../src";
import {User} from "./User";
import {Comment} from "./Comment";
import {BooleanTransformer} from '../transformers/Boolean.transformer';


@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    userId: number;

    @OneToOne(type => User, user => user.post)
    @JoinColumn()
    user: User;

    @OneToMany(type => Comment, comment => comment.post)
    comments: Comment[];

    hasTitle?: boolean;

    @Column({
        type: "tinyint",
        width: 1,
        nullable: true,
        transformer: new BooleanTransformer(),
    })
    transformedInt?: boolean;
}
